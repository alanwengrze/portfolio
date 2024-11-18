
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
    try{
      await axios.post("https://formspree.io/f/", data, {
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        }
      })
      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    }catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem.");
    }
  };

  return (
    <section className="px-4 w-full h-screen mx-auto  text-zinc-400">
      <div className="w-full mx-auto   cardBorder rounded-md p-4">
      <div className="my-8">
        <h2 className="text-lg font-bold pb-4">Vamos trabalhar juntos?</h2>
        <p className="text-base text-zinc-400">Se você está precisando de um desenvolvedor para seu projeto ou quer saber mais sobre o meu trabalho, fale comigo!
        </p>
      </div>
      <Form
        {...form}
      >
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 "
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
    </section>
    
  );
}