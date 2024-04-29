"use client";
import {useState} from "react"
import {
  Modal,
  Select,
  Stack,
  Button,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  Box,
} from "@mui/material";
import { useDisclosure } from '@mantine/hooks';
import { IconLock } from "@tabler/icons-react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import numbers from "@/utils/helpers";
import { useRegister } from "@/app/api/hooks/auth";

export const registerPreferenceValidator = z.object({
  gender: z.string().min(1, "Select your gender"),
  preferredGender: z.string().min(1, "Select your date's gender"),
  prefferedMinAge: z.string().min(1, "Enter a minimum value for your desired age"),
  prefferedMaxAge: z.string().min(1, "Enter a maximum value for your desired age"),
  location: z.string().min(1, "Select your location"),
});

export const authRegisterValidator = z
  .object({
    email: z.string().email("Enter valid email"),
    userName: z.string().min(1, "Enter your username"),
    password: z.string().min(8, "Enter password with at least 8 characters"),
    confirm_password: z
      .string()
      .min(8, "Enter password with at least 8 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

const HomeCard = () => {
  const [registrationModal, setRegistrationModal] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);
  const [formData, setFormData] = useState({});
    const { mutate: registerUser, isPending: registerUserLoading } =
      useRegister(() => setRegistrationModal(false));


       const registerPreferenceForm = useForm({
         initialValues: {
           gender: "male",
           preferredGender: "female",
           prefferedMinAge: "18",
           prefferedMaxAge: "99",
           location: "",
         },
         validate: zodResolver(registerPreferenceValidator),
       });

  
       const authRegisterForm = useForm({
         initialValues: {
           email: "",
           userName: "",
           password: "",
           confirm_password: "",
         },
         validate: zodResolver(authRegisterValidator),
       });
  function handleSubmit(
    values: z.infer<typeof registerPreferenceValidator>
  ) {
    setFormData(values);
    setRegistrationModal(true);
    // console.log("values", values);
  }

    function handleRegister(values: z.infer<typeof authRegisterValidator>) {
      const payload = { ...values, ...formData };
      //@ts-ignore
      registerUser(payload);

    }
  // console.log('formData', formData)
  return (
    <>
      <div className="flex lg:w-4/5 mx-auto relative top-[-120px]">
        <Box className="w-1/2">
          <Card
            sx={{ border: "none", borderRadius: 0, height: "400px" }}
            className="px-8 pt-8 pb-2"
          >
            <CardHeader title="Welcome to Netflirt" sx={{ color: "#355094" }} />
            <CardContent>
              <Typography sx={{ mb: 3.25, color: "text.secondary" }}>
                Welcome to our vibrant dating community! With millions of
                members worldwide, our platform connects hearts from every
                corner of the globe. Join today and discover a world of
                possibilities!
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Find your perfect match effortlessly on our intuitive dating
                platform. With millions already finding love, your journey
                starts here. Join now and let the magic begin!
              </Typography>
              {/* <Box sx={{ display: "flex" }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                  alt="it's me"
                  radius="xl"
                  size="xl"
                />
                <Avatar
                  src="https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="it's me"
                  radius="xl"
                  size="xl"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                  alt="it's me"
                  radius="xl"
                  size="xl"
                />
                <Avatar
                  src="https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="it's me"
                  radius="xl"
                  size="xl"
                />
              </Box> */}
            </CardContent>
          </Card>
        </Box>
        <Box className="w-1/2">
          <Card
            sx={{
              border: "none",
              borderRadius: 0,
              backgroundColor: "#e81a2e",
              color: "#fff",
              height: "400px",
            }}
            className="px-8 pt-8 pb-2"
          >
            <CardHeader title="Find Your Next Date" />
            <form
              onSubmit={registerPreferenceForm.onSubmit(handleSubmit)}
              className="relative"
            >
              <CardContent>
                <Stack>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="">
                      <h2 className="text-white">I am a</h2>
                      <Select
                        className="text-white"
                        placeholder="Select Gender"
                        defaultValue="Select Gender"
                        size="md"
                        data={[
                          { label: "Male", value: "male" },
                          { label: "Female", value: "female" },
                          { label: "Gay", value: "gay" },
                          { label: "Lesbian", value: "lesbian" },
                          { label: "Trans-gender", value: "trans-gender" },
                          { label: "Bi-sexual", value: "bi-sexual" },
                          { label: "Others", value: "others" },
                          { label: "No preference", value: "no preference" },
                        ]}
                        {...registerPreferenceForm.getInputProps("gender")}
                      />
                    </div>
                    <div className="">
                      <h2 className="text-white">Looking for a</h2>
                      <Select
                        className="text-white"
                        placeholder="Select Location"
                        size="md"
                        data={[
                          { label: "Male", value: "male" },
                          { label: "Female", value: "female" },
                          { label: "Gay", value: "gay" },
                          { label: "Lesbian", value: "lesbian" },
                          { label: "Trans-gender", value: "trans-gender" },
                          { label: "Bi-sexual", value: "bi-sexual" },
                          { label: "Others", value: "others" },
                          { label: "No preference", value: "no preference" },
                        ]}
                        {...registerPreferenceForm.getInputProps(
                          "preferredGender"
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 mt-6">
                    <div className="flex w-1/2 gap-4">
                      <div className="">
                        <h2 className="text-white">Min Age</h2>
                        <Select
                          className="text-white"
                          placeholder="18"
                          size="md"
                          data={numbers}
                          {...registerPreferenceForm.getInputProps(
                            "prefferedMinAge"
                          )}
                        />
                      </div>
                      <div className="">
                        <h2 className="text-white">Max Age</h2>
                        <Select
                          className="text-white"
                          placeholder="99"
                          size="md"
                          data={numbers}
                          {...registerPreferenceForm.getInputProps(
                            "prefferedMaxAge"
                          )}
                        />
                      </div>
                    </div>
                    <div className="w-1/2 ">
                      <h2 className="text-white">Location</h2>
                      <Select
                        className="text-white"
                        placeholder="Select Location"
                        size="md"
                        data={[
                          { label: "England", value: "england" },
                          { label: "Scotland", value: "scotland" },
                          { label: "Wales", value: "wales" },
                          {
                            label: "Northern_ireland",
                            value: "northern_ireland",
                          },
                          {
                            label: "Ireland_republic",
                            value: "ireland_republic",
                          },
                        ]}
                        {...registerPreferenceForm.getInputProps("location")}
                      />
                    </div>
                  </div>
                  <Button
                    // style={{backgroundColor: '#C7AB82', font: 'white'}}
                    className="hover:bg-secondary hover:text-white bg-secondary text-white mt-6 w-60"
                    size="md"
                    type="submit"
                    //   onClick={closeRateModal}
                  >
                    Find Your Partner
                  </Button>
                </Stack>
              </CardContent>
            </form>
          </Card>
        </Box>
      </div>
      <Modal
        opened={registrationModal}
        onClose={() => setRegistrationModal(false)}
        title="Create Account"
        closeOnClickOutside={false}
        centered
      >
        <form onSubmit={authRegisterForm.onSubmit(handleRegister)}>
          <Stack>
            <TextInput
              placeholder="Username"
              label="Username"
              withAsterisk
              radius="lg"
              {...authRegisterForm.getInputProps("userName")}
            />
            <TextInput
              placeholder="Email"
              label="Email"
              withAsterisk
              radius="lg"
              {...authRegisterForm.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              icon={<IconLock size="1rem" />}
              withAsterisk
              radius="lg"
              {...authRegisterForm.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm password"
              defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              icon={<IconLock size="1rem" />}
              radius="lg"
              withAsterisk
              {...authRegisterForm.getInputProps("confirm_password")}
            />
          </Stack>

          <div className="flex justify-center w-full">
            <Button
              // style={{backgroundColor: '#C7AB82', font: 'white'}}
              className="hover:bg-secondary hover:text-white bg-primary text-white mt-6 w-60"
              size="md"
              type="submit"
              //   onClick={closeRateModal}
            >
              Ready to match
            </Button>
          </div>
        </form>
      </Modal>
      ;
    </>
  );
};

export default HomeCard;
