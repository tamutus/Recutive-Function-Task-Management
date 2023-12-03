import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutSkillsInputSchema } from './PrivateEnergyCreateNestedOneWithoutSkillsInputSchema';

export const PrivateEnergiesToSkillsCreateWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateWithoutSkillInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default PrivateEnergiesToSkillsCreateWithoutSkillInputSchema;
