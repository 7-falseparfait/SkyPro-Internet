export function StepList({ steps }) {
  return (
    <ol className="space-y-4 text-left">
      {steps.map((step) => (
        <li key={step.id}>
          <div className="font-bold">
            <p className="text-[1.2rem] text-very-black">
              <span className="mr-2">{step.id}.</span>
              {step.title}
            </p>
          </div>
          <div className="text-[1rem] mt-4">{step.description}</div>
        </li>
      ))}
    </ol>
  );
}
