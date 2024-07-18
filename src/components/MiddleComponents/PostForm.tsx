import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import api from "../../api/axios"
import { useUser } from "../../hooks/usrUser";

const Wrapper = styled.div`
  width: 566px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  border: 0.1em solid #EFF3F4;
`


const IconDiv = styled.div`
  width: 40px;
  margin-right: 8px;
`

const ContentDiv = styled.div`
  width: 518px;
  padding-bottom: 12px;
`

const HeaderDiv = styled.div`
  width: 518px;
  height: 21px;
`
const Content = styled.div`
  font-size: 15px;
`

const BottomDiv = styled.div`
  width: 518px;
  height: 48px;
  font-size: 15px;
  vertical-align: middle;
  display: flex;
  align-items: end;
`

const StatDiv = styled.div`
  width: 401px;
  padding: 2px;
  height: 36px;
`

const PostButton = styled.button`
  min-width: 36px;
  min-height: 36px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  background-color: rgb(29, 155, 240);
  border-color: rgba(0, 0, 0, 0);
`

const PostButtonText = styled.span`
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
`

interface FormInput {
  content: string;
  user_id: number;
}

const Post: React.FC = () => {
  const { user } = useUser();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const content = watch("content")
  const characterCount = content ? content.length : 0;

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await api.post('/posts', data);
      console.log('Create Post', response.data);
    } catch (error) {
      setSubmitError('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) return <div>ポストはログイン後</div>;

  return (
    <Wrapper>
      <IconDiv><img src="https://placehold.jp/3d4070/ffffff/40x40.png"></img></IconDiv>
      <ContentDiv>
        <Content>ポストを投稿</Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('user_id')} value={user.id} />
          <textarea rows={5} cols={70} {
            ...register("content", {
              required: "Post is requird",
              maxLength: {
                value: 140,
                message: "Post cannot exceed 140 characters"
              }
            })
          }
          ></textarea>
          {errors.content && <span style={{ color: 'red' }}>{errors.content.message}</span>}
            <span style={{ float: 'right', color: characterCount > 140 ? 'red' : 'inherit' }}>
              {characterCount}/140
            </span>
          <BottomDiv><StatDiv></StatDiv><PostButton><PostButtonText>ポストする</PostButtonText></PostButton></BottomDiv>
          {submitError && <div style={{ color: 'red' }}>{submitError}</div>}
        </form>
      </ContentDiv>
    </Wrapper>
  );
};

export default Post;
