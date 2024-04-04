import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

function FileUploader() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`border ${darkMode ? 'border-gray-800' : 'border-gray-500'} border-dashed relative ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                <h4 className={`${darkMode ? 'text-white' : 'text-black'}`}>
                  Upload your event Image
                </h4>
                <FaCloudUploadAlt className="inline-block ml-2 dark:text-slate-900"  />
            </div>
            <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
        </div>
    );
}

export default FileUploader;
