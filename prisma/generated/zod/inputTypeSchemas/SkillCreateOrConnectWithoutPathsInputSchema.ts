import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutPathsInputSchema } from './SkillCreateWithoutPathsInputSchema';
import { SkillUncheckedCreateWithoutPathsInputSchema } from './SkillUncheckedCreateWithoutPathsInputSchema';

export const SkillCreateOrConnectWithoutPathsInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutPathsInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPathsInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutPathsInputSchema;
