import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutSucceedsInputSchema } from './SkillCreateWithoutSucceedsInputSchema';
import { SkillUncheckedCreateWithoutSucceedsInputSchema } from './SkillUncheckedCreateWithoutSucceedsInputSchema';

export const SkillCreateOrConnectWithoutSucceedsInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutSucceedsInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSucceedsInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutSucceedsInputSchema;
