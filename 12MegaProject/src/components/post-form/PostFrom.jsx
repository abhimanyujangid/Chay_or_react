import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input, Select, RTE} from '../index'
import { replace, useNavigate } from 'react-router-dom'
import appwriteServices from '../../appwrite/config'
import { useSelector } from 'react-redux'


const PostFrom = ({post}) => {
    const navigate =  useNavigate()
    const {register, handleSubmit, watch, setValue,control,getValues} = useForm({
        defaultValues:{
            title: 'post?.title' || '',
            slug: 'post?.slug' || '',
            status: 'post?.status' || 'active',
            content: 'post?.content' || '',
        }
    })
    const userData = useSelector((state)=>state.user.userData)
    // When Click submit
    const submit = async(data) =>{
        if(post){
           const file = await data.image[0] ? appwriteServices.uploadFile(data.image[0]) : null
           if(file){
            appwriteServices.deleteFile(post.featuredImage)
           }

           const dbPost = await appwriteServices.updatePost(post.$id,{
            ...data, featuredImage: file ? file.$id : undefined})
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`) // Navigate to the updated post page
            }else {
                const file = await data.image[0] ? appwriteServices.uploadFile(data.image[0]) : null
                if (file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    const dbPost = await appwriteServices.createPost({ ...data, userId: userData.$id })
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value == 'string'){
            // First method
            // const slug = value.toLowerCase().replace(/ /g,'-')
            // setValue('slug',slug)
            // return slug

            // 2nd method
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-z\d\s]+/g, '-')
            .replace(/\s/g, '-')
        } 
        return ''
    },[])

    React.useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if (name === 'title') {
                setValue('slug', slugTransform(value.title,{shouldValidate: true}))
            }
        })

        return ()=>{
            subscription.unsubscribe()
        }
    },[watch,slugTransform,setValue])

  return (
    <div>PostFrom</div>
  )
}

export default PostFrom