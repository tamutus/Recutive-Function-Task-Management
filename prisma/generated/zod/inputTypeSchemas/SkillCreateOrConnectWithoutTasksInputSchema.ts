import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutTasksInputSchema } from './SkillCreateWithoutTasksInputSchema';
import { SkillUncheckedCreateWithoutTasksInputSchema } from './SkillUncheckedCreateWithoutTasksInputSchema';

export const SkillCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutTasksInputSchema;
