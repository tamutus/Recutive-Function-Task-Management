import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO PROJECT TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * People can denote that project templates are related to their personally defined forms of energy
 */
export const PrivateEnergiesToProjectTemplatesSchema = z.object({
  projectId: z.number().int(),
  energyId: z.number().int(),
})

export type PrivateEnergiesToProjectTemplates = z.infer<typeof PrivateEnergiesToProjectTemplatesSchema>

export default PrivateEnergiesToProjectTemplatesSchema;
