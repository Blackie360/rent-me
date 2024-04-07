import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Heading } from "../../../components/ui/heading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Select from "../../../components/ui/select";
import { useToast } from "../../../components/ui/use-toast";
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/ui/file-upload"; 

const EventSchema = z.object({
  name: z.string().min(3, { message: "Event Name must be at least 3 characters" }),
  imgUrl: z
    .array(z.string())
    .max(3, { message: "You can only add up to 3 images" })
    .min(1, { message: "At least one image must be added." }),
  description: z.string().min(3, { message: "Event description must be at least 3 characters" }),
  price: z.number().int(),
  category: z.string().min(1, { message: "Please select a category" }),
});

type EventFormValues = z.infer<typeof EventSchema>;

interface EventProps {
  initialData: any | null;
  categories: string[]; // Adjust the type definition based on your actual data structure
}

const EventPage: React.FC<EventProps> = ({ initialData, categories }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit event" : "Create event";
  const description = initialData ? "Edit an event." : "Add a new event";
  const action = initialData ? "Save changes" : "Create";

  const defaultValues = initialData
    ? initialData
    : {
        name: "",
        description: "",
        price: 0,
        imgUrl: [],
        category: "",
      };

  const form = useForm<EventFormValues>({
    resolver: zodResolver(EventSchema),
    defaultValues,
  });

  const onSubmit = async (data: EventFormValues) => {
    try {
      setLoading(true);
      // Handle form submission
      router.refresh();
      router.push(`/dashboard/events`);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Event name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Event description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* This div doesn't seem to be related to any form field */}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Description</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
        <Button disabled={loading} className="ml-auto mt-20" type="submit">
          {action}
        </Button>
      </Form>
    </>
  );
};

export default EventPage;
