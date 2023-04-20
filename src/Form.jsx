export const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="name"
            type="text"
            id="name"
            placeholder="type your name..."
          />
          <Input
            label="email"
            type="email"
            id="email"
            placeholder="type your email..."
          />
          <Input
            label="phone"
            type="phone"
            id="phone"
            placeholder="type your phone..."
          />
        </div>
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
