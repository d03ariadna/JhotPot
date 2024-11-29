const formatDevices = (devices) => {
    return devices.map(device => {
        return {
            label: device.name,
            value: device._id
        }
    })
}

export default formatDevices;