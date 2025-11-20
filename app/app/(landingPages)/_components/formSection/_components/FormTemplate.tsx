import FormContactTemplate from "../templates/FormContactTemplate";
import FormEmailCollectionTemplate from "../templates/FormEmailCollectionTemplate";
import FormWaitlistTemplate from "../templates/FormWaitlistTemplate";

export type FormTemplates = "waitlist" | "email-collection" | "contact";

export type FormTemplateProps = {
  blockType: "formtemplate";
  template: FormTemplates;
};

export function FormTemplate(props: FormTemplateProps) {
  switch (props.template) {
    case "email-collection":
      return <FormEmailCollectionTemplate />;

    case "waitlist":
      return <FormWaitlistTemplate />;

    case "contact":
      return <FormContactTemplate />;
  }
}
