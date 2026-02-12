# Loader Customization Guide

## 🎨 **Visual Customizations**

### 1. **Change Loader Types**

You now have 4 different loader types to choose from:

```javascript
// Default spinner (original)
<LoadingSpinner type="default" />

// Your logo spinning
<LoadingSpinner type="logo" />

// Animated dots
<LoadingSpinner type="dots" />

// Pulsing circle
<LoadingSpinner type="pulse" />
```

### 2. **Custom Messages**

```javascript
// Navigation with custom messages
navigateWithLoading("/profile", "Loading profile...", "Fetching your data", "logo")

// Manual loading with custom messages
const { startLoading } = useRouting()
startLoading("Saving changes...", "Please don't close this window", "dots")
```

### 3. **Different Background Styles**

Edit `src/components/LoadingSpinner.js` and change the background div:

```javascript
// Current purple background
<div className="fixed inset-0 bg-[#2b0a59]/90 backdrop-blur-sm z-[9999] flex items-center justify-center">

// Dark background
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center">

// Light background
<div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[9999] flex items-center justify-center">

// Gradient background
<div className="fixed inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-sm z-[9999] flex items-center justify-center">
```

### 4. **Animation Speed**

Edit the animation duration in `src/components/LoadingSpinner.js`:

```javascript
// Faster rotation (0.5 seconds)
animate={{ rotate: 360 }}
transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}

// Slower rotation (2 seconds)
animate={{ rotate: 360 }}
transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
```

## ⚙️ **Behavior Customizations**

### 1. **Loading Duration**

Edit `src/context/RoutingContext.js`:

```javascript
// Faster loading (500ms)
const timeout = setTimeout(() => {
  setIsLoading(false)
}, 500)

// Slower loading (1500ms)
const timeout = setTimeout(() => {
  setIsLoading(false)
}, 1500)
```

### 2. **Manual Loading Control**

```javascript
import { useRouting } from "@/context/RoutingContext"

function MyComponent() {
  const { startLoading, stopLoading } = useRouting()

  const handleAsyncOperation = async () => {
    startLoading("Processing...", "This may take a few seconds", "dots")
    
    try {
      await someAsyncOperation()
    } finally {
      stopLoading()
    }
  }

  return <button onClick={handleAsyncOperation}>Process Data</button>
}
```

## 🚀 **Usage Examples**

### 1. **Different Loaders for Different Actions**

```javascript
// Profile page - use logo
navigateWithLoading("/profile", "Loading profile...", "Fetching your data", "logo")

// Settings page - use dots
navigateWithLoading("/settings", "Loading settings...", "Preparing your preferences", "dots")

// Shop page - use pulse
navigateWithLoading("/shop", "Loading shop...", "Getting the latest items", "pulse")
```

### 2. **Custom Loading for API Calls**

```javascript
function ProfilePage() {
  const { startLoading, stopLoading } = useRouting()

  const updateProfile = async () => {
    startLoading("Saving changes...", "Please wait while we update your profile", "dots")
    
    try {
      await api.updateProfile(data)
      // Success handling
    } catch (error) {
      // Error handling
    } finally {
      stopLoading()
    }
  }

  return <button onClick={updateProfile}>Save Changes</button>
}
```

### 3. **Conditional Loading Messages**

```javascript
function GamePage() {
  const { navigateWithLoading } = useRouting()
  const [gameType, setGameType] = useState("casino")

  const loadGame = () => {
    const messages = {
      casino: ["Loading casino game...", "Preparing your gaming experience", "logo"],
      slot: ["Loading slot machine...", "Spinning up the reels", "dots"],
      tournament: ["Joining tournament...", "Finding your opponents", "pulse"]
    }

    const [message, subtitle, type] = messages[gameType]
    navigateWithLoading(`/games/${gameType}`, message, subtitle, type)
  }

  return <button onClick={loadGame}>Play Game</button>
}
```

## 🎯 **Quick Customization Checklist**

- [ ] **Change loader type**: Edit the `type` prop or `navigateWithLoading` calls
- [ ] **Update messages**: Modify `message` and `subtitle` props
- [ ] **Adjust background**: Edit the background div in `LoadingSpinner.js`
- [ ] **Change animation speed**: Modify `duration` in animation transitions
- [ ] **Set loading duration**: Edit the timeout value in `RoutingContext.js`
- [ ] **Add manual loading**: Use `startLoading()` and `stopLoading()` functions

## 🔧 **Advanced Customizations**

### 1. **Add New Loader Types**

Add new cases to the `renderSpinner()` function in `LoadingSpinner.js`:

```javascript
case "bars":
  return (
    <div className="flex space-x-1 mb-4">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-8 bg-purple-400 rounded"
          animate={{ height: [8, 32, 8] }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity, 
            delay: i * 0.1 
          }}
        />
      ))}
    </div>
  )
```

### 2. **Custom Colors**

Change the color classes in the loader components:

```javascript
// Purple theme (current)
className="w-3 h-3 bg-purple-400 rounded-full"

// Blue theme
className="w-3 h-3 bg-blue-400 rounded-full"

// Green theme
className="w-3 h-3 bg-green-400 rounded-full"
```

### 3. **Add Progress Bar**

Create a progress-based loader by adding a progress state to the context and updating the LoadingSpinner component accordingly.

---

**That's it!** You now have complete control over your loader's appearance and behavior. The loader will automatically show during route transitions and you can customize it for any specific use case.
