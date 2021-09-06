import React from 'react'
import { TextField, Grid} from '@material-ui/core'
import { useFormContext, Controller} from 'react-hook-form'

const CustomTextField = ({ name, label, required }) => {
    const { control } = useFormContext()

    return (
        <div>
            <Grid item xs={12} sm={6}>
                <Controller render={({ field }) => <input {...field} />}
                            name={name}
                            label={label}
                            required={required}
                            control={control}
                            defaultValue="" />
            </Grid>
        </div>
    )
}

export default CustomTextField
