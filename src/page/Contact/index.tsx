
import { Form, FormField, FormControl, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { ImgForm } from "./ImgForm";

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
      await axios.post("https://formspree.io/f/mldelgvz", data, {
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
    <div className="px-4">
      <section 
        aria-label="Sessão de contato" 
        className="flex mx-auto text-card-foreground rounded-md border border-border">
        <div aria-label="Agrupamento do formulário e imagem" className="w-full flex flex-col justify-center gap-4 p-6">
          <div 
            aria-label="Header do formulário"
            className="rounded-md"
            data-aos="fade-up"
          >
            <h2 className="text-base text-foreground font-bold md:text-2xl lg:text-3xl">Precisa de um desenvolvedor?</h2>
            <p className=" text-card-foreground md:text-lg lg:text-xl my-4">Quer criar um site autêntico? Vamos fazer isso juntos!
            </p>
          <Form
            {...form}
          >
            <form
              aria-label="Formulário de contato"
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 bg-background lg:w-full mt-8"
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
                      placeholder="ex: Olá, gostaria de trabalhar com você!"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          </div>
        </div>
        <ImgForm />
      </section>
    </div>
    
  );
}