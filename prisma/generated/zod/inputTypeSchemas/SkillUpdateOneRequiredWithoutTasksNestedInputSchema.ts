import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutTasksInputSchema } from './SkillCreateWithoutTasksInputSchema';
import { SkillUncheckedCreateWithoutTasksInputSchema } from './SkillUncheckedCreateWithoutTasksInputSchema';
import { SkillCreateOrConnectWithoutTasksInputSchema } from './SkillCreateOrConnectWithoutTasksInputSchema';
import { SkillUpsertWithoutTasksInputSchema } from './SkillUpsertWithoutTasksInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutTasksInputSchema } from './SkillUpdateToOneWithWhereWithoutTasksInputSchema';
import { SkillUpdateWithoutTasksInputSchema } from './SkillUpdateWithoutTasksInputSchema';
import { SkillUncheckedUpdateWithoutTasksInputSchema } from './SkillUncheckedUpdateWithoutTasksInputSchema';

export const SkillUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => SkillUpdateWithoutTasksInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutTasksNestedInputSchema;
