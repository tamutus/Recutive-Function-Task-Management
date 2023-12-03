import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateWithoutTagInputSchema } from './SkillPathsToTagsCreateWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTagInputSchema';
import { SkillPathsToTagsCreateOrConnectWithoutTagInputSchema } from './SkillPathsToTagsCreateOrConnectWithoutTagInputSchema';
import { SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { SkillPathsToTagsCreateManyTagInputEnvelopeSchema } from './SkillPathsToTagsCreateManyTagInputEnvelopeSchema';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { SkillPathsToTagsUpdateManyWithWhereWithoutTagInputSchema } from './SkillPathsToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { SkillPathsToTagsScalarWhereInputSchema } from './SkillPathsToTagsScalarWhereInputSchema';

export const SkillPathsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillPathsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillPathsToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillPathsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema;
