
import { Form, FormField, FormControl, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const contactSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, { message: "Digite um email válido" }),
  message: z.string().min(10, { message: "A mensagem deve ter no mínimo 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact () {

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    const response = await axios.post("https://formspree.io/f/", data, {
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      }
    })
    if(response.status === 200) {
      toast.success("Mensagem enviada com sucesso!");
    }else {
      toast.error("Ocorreu um erro ao enviar a mensagem.");
    }
    form.reset();
  };

  return (
    <div className="w-full h-screen">
      <Form
        {...form}
      >
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-4 text-white"
        >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nome completo
              </FormLabel>
              <FormControl>
              <Input
                id="name"
                type="text" 
                {...field}
                placeholder="ex: Alan Wengrze"
              />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço de e-mail</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email" 
                  {...field}
                  placeholder="ex: alan@gmail.com"
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
              <FormLabel>Sua mensagem</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  {...field}
                  placeholder="Message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit" className="text-white">Submit</Button>
        </form>
      </Form>
    </div>
    
  );
}