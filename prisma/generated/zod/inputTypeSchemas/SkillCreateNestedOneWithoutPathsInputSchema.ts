import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPathsInputSchema } from './SkillCreateWithoutPathsInputSchema';
import { SkillUncheckedCreateWithoutPathsInputSchema } from './SkillUncheckedCreateWithoutPathsInputSchema';
import { SkillCreateOrConnectWithoutPathsInputSchema } from './SkillCreateOrConnectWithoutPathsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutPathsInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutPathsInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPathsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutPathsInputSchema;
