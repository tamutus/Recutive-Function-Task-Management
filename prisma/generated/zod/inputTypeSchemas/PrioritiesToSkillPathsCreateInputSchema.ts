import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutPrioritiesInputSchema } from './SkillPathCreateNestedOneWithoutPrioritiesInputSchema';
import { PriorityCreateNestedOneWithoutSkillPathsInputSchema } from './PriorityCreateNestedOneWithoutSkillPathsInputSchema';

export const PrioritiesToSkillPathsCreateInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  skillPath: z.lazy(() => SkillPathCreateNestedOneWithoutPrioritiesInputSchema),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutSkillPathsInputSchema)
}).strict();

export default PrioritiesToSkillPathsCreateInputSchema;
