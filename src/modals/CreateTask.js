import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle,save}) => {
   const [taskName, setTaskName] =useState('');
   const [description, setDescription] = useState('');
    
   const handleChange =(e) => {

   const {name, value}=e.target
  

    if(name === 'taskName'){
        setTaskName(value)
    }else{
        setDescription(value)
    }
   }

   const handleSave =() =>{
    let taskobj ={}
    taskobj['Name'] = taskName
    taskobj['Description'] =description
    save(taskobj)


   }
  return (
<Modal isOpen={modal} toggle={toggle}  >
        <ModalHeader toggle={toggle}>
          create Task
        </ModalHeader>
        <ModalBody>
            <form>
                <div className='form-group'>
                    <label>Task name</label>
                    <input type='text' className='form-control' value={taskName} onChange = {handleChange} name='taskName'></input>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea rows="6" className='form-control' value={description} onChange={handleChange} name='description'/>
                </div>

            </form>
       
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  )
}

export default CreateTask