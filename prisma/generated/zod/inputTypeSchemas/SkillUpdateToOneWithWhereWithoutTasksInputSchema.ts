import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutTasksInputSchema } from './SkillUpdateWithoutTasksInputSchema';
import { SkillUncheckedUpdateWithoutTasksInputSchema } from './SkillUncheckedUpdateWithoutTasksInputSchema';

export const SkillUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutTasksInputSchema;
