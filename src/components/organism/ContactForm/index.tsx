import 'twin.macro';

import Button from '../../atoms/Button';
import LabelInput from '../../molecule/LabelInput';

const ContactForm = () => {
  return (
    <form tw="grid gap-y-10">
      <LabelInput name="name" inputTitle="Name *" />
      <LabelInput name="e-mail" inputTitle="Email *" />
      <LabelInput
        name="message"
        inputTitle="Message *"
        type="textarea"
        tw="min-h-[100px]"
      />
      <Button type="submit" variant="outline">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
