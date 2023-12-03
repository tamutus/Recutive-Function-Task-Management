import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutSkillPathsInputSchema } from './PriorityCreateNestedOneWithoutSkillPathsInputSchema';

export const PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateWithoutSkillPathInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutSkillPathsInputSchema)
}).strict();

export default PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema;
