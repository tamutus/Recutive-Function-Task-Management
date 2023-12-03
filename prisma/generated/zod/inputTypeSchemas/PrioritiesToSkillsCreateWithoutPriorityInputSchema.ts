import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutPrioritiesInputSchema } from './SkillCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToSkillsCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateWithoutPriorityInput> = z.object({
  notes: z.string().optional().nullable(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToSkillsCreateWithoutPriorityInputSchema;
