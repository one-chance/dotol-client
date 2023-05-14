import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export type FormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export default (props: FormProps) => <form {...props} />;
