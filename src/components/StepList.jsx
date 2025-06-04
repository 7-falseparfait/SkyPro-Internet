export function StepList({ steps }) {
  return (
    <ol className="space-y-4 text-left">
      {steps.map(step => (
        <li key={step.id}>
          <div className="font-bold text-[1.2rem] ">
            <p className="text-very-black lg:!text-[1.5rem]">
              <span className="mr-2">{step.id}.</span>
              {step.title}
            </p>
          </div>
          <div className="text-[1rem] lg:text-[1.5rem] mt-4 lg:mt-1">{step.description}</div>
        </li>
      ))}
    </ol>
  );
}
