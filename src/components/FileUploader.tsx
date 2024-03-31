'use client'

import { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import { useStore } from '@/store/store'

export function FileUploader() {

    const { editProduct, setEditProduct } = useStore(state => {
        return {
            editProduct: state.editProduct,
            setEditProduct: state.setEditProduct
        }
    })

    const [files, setFiles] = useState<any>([])

    const onAddFile = (error: any, { file }: any) => {

        if (error) {
            console.error('File upload failed', error)
        } else {
            setEditProduct({ ...editProduct, Files: [...editProduct.Files, file] })
            setFiles([...files, file])
        }
    }

    const onRemoveFile = (error: any, { file }: any) => {
        if (error) {
            console.error('File remove failed', error)
        } else {
            const newFiles = files.filter((f: any) => f.file.name !== file.name)
            setEditProduct({ ...editProduct, Files: newFiles })
            setFiles(newFiles)
        }
    }

    return (
        <FilePond
            files={files}
            onremovefile={onRemoveFile}
            allowMultiple={true}
            maxFiles={3}
            name="Image"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onaddfile={onAddFile}
        />
    )
}