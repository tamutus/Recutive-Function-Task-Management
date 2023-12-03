import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutSucceedsInputSchema } from './SkillCreateWithoutSucceedsInputSchema';
import { SkillUncheckedCreateWithoutSucceedsInputSchema } from './SkillUncheckedCreateWithoutSucceedsInputSchema';
import { SkillCreateOrConnectWithoutSucceedsInputSchema } from './SkillCreateOrConnectWithoutSucceedsInputSchema';
import { SkillUpsertWithoutSucceedsInputSchema } from './SkillUpsertWithoutSucceedsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutSucceedsInputSchema } from './SkillUpdateToOneWithWhereWithoutSucceedsInputSchema';
import { SkillUpdateWithoutSucceedsInputSchema } from './SkillUpdateWithoutSucceedsInputSchema';
import { SkillUncheckedUpdateWithoutSucceedsInputSchema } from './SkillUncheckedUpdateWithoutSucceedsInputSchema';

export const SkillUpdateOneRequiredWithoutSucceedsNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutSucceedsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSucceedsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutSucceedsInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutSucceedsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutSucceedsInputSchema),z.lazy(() => SkillUpdateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutSucceedsInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutSucceedsNestedInputSchema;
