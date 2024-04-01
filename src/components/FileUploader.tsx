'use client'

import { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginValidateType from "filepond-plugin-file-validate-type"
import 'filepond/dist/filepond.min.css'
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { useStore } from '@/store/store'

export function FileUploader() {

    const { editProduct, setEditProduct } = useStore(state => {
        return {
            editProduct: state.editProduct,
            setEditProduct: state.setEditProduct
        }
    })

    const [files, setFiles] = useState<File[]>([])

    const onAddFile = (error: any, { file }: any) => {

        if (error) {
            console.error('File upload failed', error)
        } else {
            setEditProduct({ ...editProduct, UploadImages: [...editProduct.UploadImages, file] })
            setFiles([...files, file])
        }
    }

    const onRemoveFile = (error: any, { file }: any) => {
        if (error) {
            console.error('File remove failed', error)
        } else {
            const newFiles = files.filter((f: any) => f.name !== file.name)
            setEditProduct({ ...editProduct, UploadImages: newFiles })
            setFiles(newFiles)
        }
    }

    registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginValidateType
    );

    return (
        <FilePond
            files={files}
            onremovefile={onRemoveFile}
            allowMultiple={true}
            maxFiles={3}
            acceptedFileTypes={['image/*']}
            name="Image"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onaddfile={onAddFile}
        />
    )
}