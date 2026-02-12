export default function AdminContentPage() {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Content Upload System</h1>
        </div>

        <div class="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
          <h1 class="text-2xl font-bold mb-6">Upload New Content</h1>
          <div class="bg-purple-900 p-6 rounded-lg mb-6 flex flex-col items-center">
            <div class="w-full h-32 border-2 border-dashed border-purple-700 rounded-lg flex items-center justify-center mb-4">
              <span>Drag and drop files here, or click to browse</span>
            </div>
            <button class="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
              Browse Files
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block mb-2">Content Title</label>
              <input
                type="text"
                placeholder="Enter content title"
                class="w-full p-2 bg-purple-800 rounded"
              />
            </div>
            <div>
              <label class="block mb-2">Category</label>
              <input
                type="text"
                placeholder="Game Assets"
                class="w-full p-2 bg-purple-800 rounded"
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2">Description</label>
            <textarea
              placeholder="Enter content description"
              class="w-full p-2 bg-purple-800 rounded h-32"
            ></textarea>
          </div>
          <div class="flex space-x-4 mb-6">
            <button class="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
              Upload Content
            </button>
            <button class="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
              Save Draft
            </button>
          </div>
          <div class="bg-purple-800 p-6 rounded">
            <h2 class="text-xl font-semibold mb-4">Recent Uploads</h2>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span>game-background.jpg</span>
                <span class="text-green-500">published</span>
              </div>
              <div class="flex justify-between items-center">
                <span>tutorial-video.mp4</span>
                <span class="text-yellow-500">processing</span>
              </div>
              <div class="flex justify-between items-center">
                <span>user-manual.pdf</span>
                <span class="text-gray-500">draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
