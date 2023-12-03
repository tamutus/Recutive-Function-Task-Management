import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutSkillsInputSchema } from './PriorityCreateNestedOneWithoutSkillsInputSchema';

export const PrioritiesToSkillsCreateWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateWithoutSkillInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default PrioritiesToSkillsCreateWithoutSkillInputSchema;
