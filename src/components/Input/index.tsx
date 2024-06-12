interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
}

const Input = ({ label, placeholder, type = 'text', name }: InputProps) => {
  return (
    <div className="mb-4 w-full flex flex-col">
      <label className="text-base text-crema">{label}</label>
      {type === 'textarea' ? (
        <textarea 
          className="mt-2 p-2 bg-transparent text-crema border-0 border-b-2 border-crema placeholder:text-crema focus:outline-none resize-none h-28"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="mt-2 p-2 bg-transparent text-crema border-0 border-b-2 border-crema placeholder:text-crema focus:outline-none"
        />
      )}
    </div>
  );
};

export default Input;
