

export const roles=(allowedRoles)=>{ //this is a middle ware factory
    return(req,res,next)=>{ //returns middleware function based on what roles allowed
        if(!allowedRoles.includes(req.user.role))
            return res.status(500).json({message:"you do not have the necessary authority"})
    next()
    }
    
}