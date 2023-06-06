import Card from "../../../src/components/Card"
import {render,screen} from "@testing-library/react"
import { ReactNode } from "react"
import { describe, it, vitest } from "vitest"
vitest.mock('react-router-dom',()=>{
    type TLink ={
        children:ReactNode,
        to:string
    }
    return{
        Link({children,to}:TLink){
            return <a href={to} data-testid="link">{children}</a>
        }
    }
})
describe("Card component test",()=>{
    const title="any-title"
    it("should render without crashing",()=>{
        render(<Card title={title}><p>my lesson component</p></Card>)
    expect(screen.getByText(/my lesson component/)).toBeInTheDocument()
    })
    it("should have a relative link to the lesson title",()=>{
      
        render(<Card title={title}><p>my lesson component</p></Card>)
    expect(screen.getByTestId(/link/i)).toHaveAttribute("href",`lesson/${title}`)
    })
})