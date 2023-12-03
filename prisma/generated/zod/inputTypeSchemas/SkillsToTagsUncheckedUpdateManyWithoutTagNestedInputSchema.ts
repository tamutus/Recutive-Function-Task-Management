import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateWithoutTagInputSchema } from './SkillsToTagsCreateWithoutTagInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillsToTagsUncheckedCreateWithoutTagInputSchema';
import { SkillsToTagsCreateOrConnectWithoutTagInputSchema } from './SkillsToTagsCreateOrConnectWithoutTagInputSchema';
import { SkillsToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './SkillsToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { SkillsToTagsCreateManyTagInputEnvelopeSchema } from './SkillsToTagsCreateManyTagInputEnvelopeSchema';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './SkillsToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { SkillsToTagsUpdateManyWithWhereWithoutTagInputSchema } from './SkillsToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { SkillsToTagsScalarWhereInputSchema } from './SkillsToTagsScalarWhereInputSchema';

export const SkillsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.SkillsToTagsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => SkillsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => SkillsToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => SkillsToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => SkillsToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTagsScalarWhereInputSchema),z.lazy(() => SkillsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema;
