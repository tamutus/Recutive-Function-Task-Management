import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPathsInputSchema } from './SkillCreateWithoutPathsInputSchema';
import { SkillUncheckedCreateWithoutPathsInputSchema } from './SkillUncheckedCreateWithoutPathsInputSchema';
import { SkillCreateOrConnectWithoutPathsInputSchema } from './SkillCreateOrConnectWithoutPathsInputSchema';
import { SkillUpsertWithoutPathsInputSchema } from './SkillUpsertWithoutPathsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutPathsInputSchema } from './SkillUpdateToOneWithWhereWithoutPathsInputSchema';
import { SkillUpdateWithoutPathsInputSchema } from './SkillUpdateWithoutPathsInputSchema';
import { SkillUncheckedUpdateWithoutPathsInputSchema } from './SkillUncheckedUpdateWithoutPathsInputSchema';

export const SkillUpdateOneRequiredWithoutPathsNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutPathsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPathsInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutPathsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutPathsInputSchema),z.lazy(() => SkillUpdateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPathsInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutPathsNestedInputSchema;
