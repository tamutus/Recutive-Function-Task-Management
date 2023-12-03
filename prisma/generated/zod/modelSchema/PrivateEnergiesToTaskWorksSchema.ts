import { z } from 'zod';
import { DecimalJSLikeSchema } from '../inputTypeSchemas/DecimalJsLikeSchema'
import { isValidDecimalInput } from '../inputTypeSchemas/isValidDecimalInput'

/////////////////////////////////////////
// PRIVATE ENERGIES TO TASK WORKS SCHEMA
/////////////////////////////////////////

/**
 * Join table to store *private* energy measurements about each task, by chunk of work done.
 */
export const PrivateEnergiesToTaskWorksSchema = z.object({
  energyId: z.number().int(),
  workId: z.number().int(),
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: "Field 'startingValue' must be a Decimal. Location: ['Models', 'PrivateEnergiesToTaskWorks']",  }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: "Field 'endingValue' must be a Decimal. Location: ['Models', 'PrivateEnergiesToTaskWorks']",  }),
})

export type PrivateEnergiesToTaskWorks = z.infer<typeof PrivateEnergiesToTaskWorksSchema>

export default PrivateEnergiesToTaskWorksSchema;
