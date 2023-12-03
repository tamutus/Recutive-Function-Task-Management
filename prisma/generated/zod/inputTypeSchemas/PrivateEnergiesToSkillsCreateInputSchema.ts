import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutPrivateEnergiesInputSchema } from './SkillCreateNestedOneWithoutPrivateEnergiesInputSchema';
import { PrivateEnergyCreateNestedOneWithoutSkillsInputSchema } from './PrivateEnergyCreateNestedOneWithoutSkillsInputSchema';

export const PrivateEnergiesToSkillsCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutPrivateEnergiesInputSchema),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default PrivateEnergiesToSkillsCreateInputSchema;
