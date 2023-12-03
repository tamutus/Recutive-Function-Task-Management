import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutTasksInputSchema } from './SkillUpdateWithoutTasksInputSchema';
import { SkillUncheckedUpdateWithoutTasksInputSchema } from './SkillUncheckedUpdateWithoutTasksInputSchema';
import { SkillCreateWithoutTasksInputSchema } from './SkillCreateWithoutTasksInputSchema';
import { SkillUncheckedCreateWithoutTasksInputSchema } from './SkillUncheckedCreateWithoutTasksInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutTasksInputSchema: z.ZodType<Prisma.SkillUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutTasksInputSchema;
