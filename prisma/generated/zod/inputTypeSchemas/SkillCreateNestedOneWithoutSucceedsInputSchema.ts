import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutSucceedsInputSchema } from './SkillCreateWithoutSucceedsInputSchema';
import { SkillUncheckedCreateWithoutSucceedsInputSchema } from './SkillUncheckedCreateWithoutSucceedsInputSchema';
import { SkillCreateOrConnectWithoutSucceedsInputSchema } from './SkillCreateOrConnectWithoutSucceedsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutSucceedsInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutSucceedsInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSucceedsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutSucceedsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutSucceedsInputSchema;
