import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { addDevice, deleteDevice, fetchDevices } from "@/src/store/devices/devices";

export const useDevicesStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice user
    const { devices, isLoading, error } = useSelector((state) => state.devices);

    // Fetch User Data
    const startFetchDevices = async(userId) => {        
        try {
            await dispatch(fetchDevices(userId)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Devices failed:", error);
        }
    };

    const startAddDevice = async (device) => {
        try {
            // console.log(device)
            await dispatch(addDevice(device)).unwrap();
        } catch (error) {
            console.error("Adding Device failed:", error);
        }
    };

    const startDeleteDevice = async (deviceId) => {
        try {
            await dispatch(deleteDevice(deviceId)).unwrap();
            // router.replace("/(app)/extra/(devices)/");
        } catch (error) {
            console.error("Deleting Device failed:", error);
        }
    }




    return {
        devices,
        isLoading,
        error,

        // Métodos
        startFetchDevices,
        startAddDevice,
        startDeleteDevice
    };
};

