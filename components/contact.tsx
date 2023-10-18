import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionHeading from "./heading";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { onSubmit } from "@/actions/send-email";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: "This field is required" })
    .max(550, { message: "This message is too long" }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.6 },
        }}
      >
        <SectionHeading>Contact</SectionHeading>
        <p className="text-center mb-6">
          If you liked my work, please contact me and let me know
        </p>
        <Form {...form}>
          <form
            action={async (formData) => {
              try {
                await onSubmit(formData);
                toast({
                  description: "Your message has been sent.",
                });
              } catch (error) {
                toast({
                  description: "Something went wrong.",
                });
              }
            }}
            className="mb-28 max-w-[700px] mx-auto flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Here gous your email..."
                      className="border-0 focus: active:border-0"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={16}
                      placeholder="Write a message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="rounded-full w-fit px-6 py-1 flex gap-3 items-center mx-auto"
            >
              Submit
              <BsFillSendFill />
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
}
