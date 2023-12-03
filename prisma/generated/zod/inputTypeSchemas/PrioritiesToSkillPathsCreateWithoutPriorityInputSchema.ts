import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutPrioritiesInputSchema } from './SkillPathCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToSkillPathsCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateWithoutPriorityInput> = z.object({
  notes: z.string().optional().nullable(),
  skillPath: z.lazy(() => SkillPathCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToSkillPathsCreateWithoutPriorityInputSchema;
