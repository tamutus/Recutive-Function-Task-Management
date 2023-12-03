import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutTasksInputSchema } from './SkillCreateWithoutTasksInputSchema';
import { SkillUncheckedCreateWithoutTasksInputSchema } from './SkillUncheckedCreateWithoutTasksInputSchema';
import { SkillCreateOrConnectWithoutTasksInputSchema } from './SkillCreateOrConnectWithoutTasksInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutTasksInputSchema;
