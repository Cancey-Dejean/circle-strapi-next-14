import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "react-aria-components"

type Props = {}

export default function NewsletterForm({}: Props) {
  return (
    <Form action="#" className="form">
      <div className="form-inner">
        <div className="input-wrap">
          <TextField
            name="email"
            type="email"
            isRequired
            className="w-full field-group"
          >
            <Label className="sr-only">Email</Label>
            <Input
              placeholder="Your email"
              className="input-field min-h-[70px]"
            />
            <FieldError className="input-field-error text-white" />
          </TextField>
        </div>
        <div className="btn-container">
          <Button type="submit" className="btn-prime btn-base">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  )
}
