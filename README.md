# Hackathon

## Local development

```bash
# In one terminal, run the vite dev server:
npm run dev

# In another terminal, run tailwind:
npm run dev-styles
```

## Mobile builds

### iOS

First, you'll need to generate the iOS xcode project, using capacitor:

```bash
npx cap add ios
```

If you intend to run the app on a real device, you'll first need to open the project in xcode, so that you can assign a provisioning profile:

```bash
npm run ios-open
```

Then, to build and run the app on a real device or in an emulator:

```bash
npm run ios
```

If your iOS device is connected via USB, it should appear at the top of the list of devices.