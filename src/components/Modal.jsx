import CloseIcon from "./CloseIcon";
import TodoInput from "./TodoInput";

const Modal = (props) => {
  return (
    <div
      className="z-10 w-[100vw]"
      aria-labelledby="crop-image-dialog"
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div className="fixed inset-10 z-10  overflow-y-auto">
        <div className="flex  justify-center px-2 py-12 text-center ">
          <div className="relative w-[95%] sm:w-[80%] min-h-[0vh] rounded-2xl bg-gray-800 text-slate-100 text-left shadow-xl transition-all">
            <div className="px-5 py-4">
              <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-10 right-10"
                onClick={props.closeModal}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon/>
              </button>
              <TodoInput close={props.closeModal}/>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;






