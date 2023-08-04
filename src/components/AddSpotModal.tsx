import toast from "react-hot-toast";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type AddSpotFormInput, addSpotFormInput } from "~/schema";
import { RedirectToSignIn } from "@clerk/nextjs";
import { api } from "~/utils/api";

type AddSpotModalProps = {
  isSignedIn: boolean;
};

const AddSpotModal = ({ isSignedIn }: AddSpotModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddSpotFormInput>({
    resolver: zodResolver(addSpotFormInput),
  });
  const context = api.useContext();
  const { mutate, isLoading: isAddingSpot } = api.spots.create.useMutation({
    onSuccess: async () => {
      await context.spots.getAll.invalidate();
      setShowModal(false);
      reset();
    },
    onError: (e) => {
      setShowModal(false);
      reset();
      toast.error("Failed to post! Please try again later.");
    },
  });
  const onSubmit: SubmitHandler<AddSpotFormInput> = (data) => {
    mutate({ ...data });
  };
  const onAddSpotClicked = () => {
    if (!isSignedIn) {
      setShowRedirect(true);
    } else {
      setShowModal(true);
      setShowRedirect(false);
    }
  };

  return (
    <>
      {showRedirect && <RedirectToSignIn />}
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative h-full w-full px-6 py-2 md:h-2/3 md:w-1/2 md:p-0">
              <form
                className="relative flex w-full flex-col rounded-lg border-2 border-purple-600 bg-purple-100 outline-none focus:outline-none"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex items-center justify-between rounded-t border-b border-solid border-purple-600 p-5">
                  <h3 className="text-2xl font-semibold">Add a Spot</h3>
                  <button
                    className="border-none bg-transparent px-4 text-2xl font-semibold text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6">×</span>
                  </button>
                </div>
                <div className="relative flex flex-col gap-4 p-6">
                  <label htmlFor="spotName">
                    <b>Blade Spot Name</b>
                  </label>
                  <input type="text" id="spotName" {...register("spotName")} />
                  {errors.spotName?.message && (
                    <div className="error">{errors.spotName?.message}</div>
                  )}
                  <label htmlFor="googleMapsUrl">
                    <b>Google Maps Link</b>
                  </label>
                  <input
                    type="text"
                    id="googleMapsUrl"
                    {...register("googleMapsUrl")}
                  />
                  {errors.googleMapsUrl?.message && (
                    <div className="error">{errors.googleMapsUrl?.message}</div>
                  )}
                  <label htmlFor="imageUrl">
                    <b>Blade Spot Photo Link</b>
                  </label>
                  <input type="text" id="imageUrl" {...register("imageUrl")} />
                  {errors.imageUrl?.message && (
                    <div className="error">{errors.imageUrl?.message}</div>
                  )}
                </div>
                <div className="flex justify-center gap-4 rounded-b border-t border-solid border-purple-600 p-6">
                  <button
                    className="mb-1 mr-1 rounded border-2 border-purple-600 bg-lime-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-lime-600"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Add Spot
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : (
        <button
          className="group fixed bottom-5 left-1/2 z-30 -translate-x-1/2 transform rounded-2xl border-2 border-purple-600 bg-purple-100 px-6 py-2 shadow-lg hover:border-purple-100 hover:bg-purple-600"
          type="button"
          onClick={() => onAddSpotClicked()}
          disabled={isAddingSpot}
        >
          <span className="text-xl group-hover:text-purple-100">
            Add a Spot
          </span>
        </button>
      )}
    </>
  );
};

export default AddSpotModal;
